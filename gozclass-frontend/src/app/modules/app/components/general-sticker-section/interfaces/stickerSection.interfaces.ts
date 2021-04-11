import { GeneralSticker } from "../../general-sticker/interfaces/generaSticker.interfaces";

export interface StickerSection {
    header: {
      icon: string;
      title: string;
    };
    link?: string;
    stickers: GeneralSticker[];
}
