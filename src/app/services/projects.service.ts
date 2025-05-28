import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS } from '../db/projects.db';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private arrProjects : Project[];

  constructor() {
    this.arrProjects = PROJECTS;
  }

  getAll() : Project[] {
    return this.arrProjects;
  }
}
