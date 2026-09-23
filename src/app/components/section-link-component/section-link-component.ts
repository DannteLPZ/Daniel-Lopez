import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-link-component',
  styleUrl: './section-link-component.css',
  templateUrl: './section-link-component.html',
})

export class SectionLinkComponent {
  @Input() sectionId: string = ""
  @Input() header: string = ""
  @Input() description: string = ""
}
