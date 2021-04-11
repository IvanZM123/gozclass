// Imports modules.
import { Component, Input } from '@angular/core';

// Imports interfaces.
import { StickerSection } from './interfaces/stickerSection.interfaces';

@Component({
  selector: 'app-general-sticker-section',
  templateUrl: './general-sticker-section.component.html',
  styleUrls: ['./general-sticker-section.component.css']
})
export class GeneralStickerSectionComponent {
  @Input() section: StickerSection;
}
