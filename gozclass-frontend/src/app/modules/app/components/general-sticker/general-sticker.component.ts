// Imports modules.
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Import helper.
import { GeneratePicture } from 'src/app/core/helpers/GenerateAvatar';

// Imports interfaces.
import { GeneralSticker } from './interfaces/generaSticker.interfaces';

@Component({
  selector: 'app-general-sticker',
  templateUrl: './general-sticker.component.html',
  styleUrls: ['./general-sticker.component.css']
})
export class GeneralStickerComponent implements OnChanges {
  @Input() sticker: GeneralSticker;

  constructor(private generatePicture: GeneratePicture) {}

  ngOnChanges(changes: SimpleChanges): void {
    const sticker = changes.sticker.currentValue as GeneralSticker;
    sticker.avatar = sticker.avatar ? sticker.avatar : this.generatePicture.avatar(sticker.title, 50);
  }
}
