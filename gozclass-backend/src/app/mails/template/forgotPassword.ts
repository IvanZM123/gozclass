// Imports interfaces.
import { IConfirmEmail } from "../interfaces/mail.interfaces";

export function forgotPasswordHtml(data: IConfirmEmail) {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"><meta charset="UTF-8" style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"><meta http-equiv="X-UA-Compatible" content="IE=edge" style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"><meta name="viewport" content="width=device-width,initial-scale=1" style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"><title style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none">Document</title></head><body style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"><style style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"></style><main style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"><div class="container" style="background-color:#EA2027;box-sizing:border-box;font-family:system-ui;margin:0;min-height:100vh;padding:20px 10px;text-decoration:none"><div class="row" style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-align:center;text-decoration:none"><div class="col" style="box-sizing:border-box;display:inline-block;font-family:system-ui;margin:0;padding:0;text-decoration:none"><div class="card" style="background-color:#fff;border-radius:10px;box-sizing:border-box;font-family:system-ui;margin:0;padding:20px;text-decoration:none;width:100%"><div class="card-header" style="box-sizing:border-box;font-family:system-ui;margin:0;padding:10px 0;text-decoration:none"><img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1613101428/angular_1_ucmazl.png" width="150px" style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none"></div><div class="card-body" style="box-sizing:border-box;font-family:system-ui;margin:0;padding:10px 0;text-decoration:none"><h1 class="text-muted text-center" style="box-sizing:border-box;color:#696969;font-family:system-ui;font-weight:100;margin:0;padding:10px 0;text-align:center;text-decoration:none">¿Olvidaste tu contraseña?</h1><p style="box-sizing:border-box;font-family:system-ui;font-size:18px;margin:0;padding:10px 0;text-decoration:none">¡No te preocupes ${ data.nickname }! tenemos todo bajo control.<br style="box-sizing:border-box;font-family:system-ui;margin:0;padding:0;text-decoration:none">Consigamos una nueva contraseña. Pero por favor, no seas tan olvidadizo. 😂</p><a href="${ data.url }" style="box-sizing:border-box;cursor:pointer;font-family:system-ui;margin:0;padding:0;text-decoration:none"><button style="background-color:#ea2027;border:0;border-radius:30px;box-sizing:border-box;color:#fff;cursor:pointer;font-family:system-ui;font-size:18px;margin:15px 0;padding:15px 25px;text-decoration:none">Nueva contraseña</button></a><hr style="box-sizing:border-box;font-family:system-ui;margin:15px 20px;padding:0;text-decoration:none"><p style="box-sizing:border-box;font-family:system-ui;font-size:18px;margin:0;padding:10px 0;text-decoration:none">${ new Date().getFullYear() } <span class="text-muted" style="box-sizing:border-box;color:#696969;font-family:system-ui;margin:0;padding:0;text-decoration:none">Team Angular 15</span>. Todos los derechos reservados.</p></div></div></div></div></div></main></body></html>
    `;
};
