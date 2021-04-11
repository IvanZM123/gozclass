// Imports modules.
import { Request } from "express";
import createHttpError from "http-errors";

// Imports models.
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";

// Imports repositories.
import { DatabaseRepository } from "../../../repositories/DatabaseRepository";

// Imports action repositories.
import { GetEvent, GetEventByIdAndBannedUser, GetEventByIdAndMemberId } from "../../../repositories/events/read.events";
import { AddUserToEvent, BanUser, RemoveUserFromEvent } from "../../../repositories/events/write.events";
import { GetUser } from "../../../repositories/user/read.user";

export class EventsUsersPostman {
    private databaseEvent: DatabaseRepository<Event>;
    private databaseUser: DatabaseRepository<User>;

    constructor() {
        this.databaseEvent = new DatabaseRepository;
        this.databaseUser = new DatabaseRepository;
    }

    async create(req: Request): Promise<{ event: string, user: string }> {
        const { eventId } = req.params;
        const { userId } = req.body;

        // Check if the user exists.
        const user: User | null = await this.databaseUser.get(new GetUser(userId));
        if (!user) throw createHttpError(404, "No puedes suscribir al usuario al evento porque no existe.", {
            name: "UserNotFound"
        });

        // Check if the event exists
        const eventResult: Event | null = await this.databaseEvent.get(new GetEvent(eventId));
        if (!eventResult) throw createHttpError(404, "No puedes suscribir al usuario a un evento que no existe.", {
            name: "ResourceNotFound"
        });

        // Check if the user is already participating.
        const event: Event | null = await this.databaseEvent.get(new GetEventByIdAndMemberId({
            userId,
            eventId
        }));
        if (event) throw createHttpError(403, `El usuario ${ user.nickname } ya forma parte del evento.`, {
            name: "UserAlreadyEvent"
        });

        // Check if the user is banned.
        const banned: Event | null = await this.databaseEvent.get(new GetEventByIdAndBannedUser({
            eventId,
            userId
        }));
        if (banned) throw createHttpError(403, `Ya no puedes participar en el evento ${ banned.name }, has sido baneado.`, {
            name: "BannedEvent"
        });

        // Add user to event.
        await this.databaseEvent.update(new AddUserToEvent({ eventId, userId }));
        return { event: eventResult.name, user: user.nickname };
    }

    async remove(req: Request): Promise<{ event: string }> {
        const { eventId, userId } = req.params;
        const { user } = req.app.locals;

        // check permissions
        if (user._id !== userId) throw createHttpError(401, "No tienes los permisos necesarios para realizar esta accion.", {
            name: "InsufficientPermissions"
        });

        // Check if the user belongs to the event.
        const event: Event | null = await this.databaseEvent.get(new GetEventByIdAndMemberId({
            userId,
            eventId
        }));
        if (!event) throw createHttpError(403, "Es posible que el usuario no participe o haya sido baneado del evento.", {
            name: "Forbidden"
        });

        // Remove user from group
        await this.databaseEvent.update(new RemoveUserFromEvent({ eventId, userId }));

        // Ban the user.
        await this.databaseEvent.update(new BanUser({ eventId, userId }));

        return { event: event.name };
    }
}
