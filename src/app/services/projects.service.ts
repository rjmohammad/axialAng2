import { Project } from './project'
import { PROJECTS, DELETE, ADD, EDIT } from './mock-project'
import { Injectable } from '@angular/core'

@Injectable()

export class ProjectsService {
  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }

  deleteProject(index: number): Promise<Project[]> {
    return Promise.resolve(DELETE(index));
  }

  addProject(proj: Project): Promise<Project[]> {
    return Promise.resolve(ADD(proj));
  }

  editProject(index: number, proj: Project): void {
    EDIT(index, proj)
  }
}