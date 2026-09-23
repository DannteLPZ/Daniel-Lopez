import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SectionLinkComponent } from './components/section-link-component/section-link-component';
import { AboutSection } from './components/sections/about-section/about-section';
import { EducationSection } from './components/sections/education-section/education-section';
import { ExperienceSection } from './components/sections/experience-section/experience-section';
import { SkillsSection } from './components/sections/skills-section/skills-section';
import { ContactSection } from './components/sections/contact-section/contact-section';

@Component({
  imports: [SectionLinkComponent, AboutSection, EducationSection, ExperienceSection, SkillsSection, ContactSection],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('daniel-lopez');
}
