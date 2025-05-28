import { Component, inject } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectsService } from '../../services/projects.service';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  myProjects: Project[];
  projectService = inject(ProjectsService);

  constructor() {
    this.myProjects = [];
  }

  ngOnInit(): void {
    this.myProjects = this.projectService.getAll();
  }
}
