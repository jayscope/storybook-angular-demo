import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'task-item',
    template: `
    <div class="list-item {{ task?.state }}">
      <label class="checkbox">
        <input
          type="checkbox"
          [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
          disabled="true"
          name="checked"
        />        
        <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
      </label>
      
      <div class="title">
        <input type="text" [value]="task?.title" readonly="true" placeholder="Input title" />
      </div>

      <div class="actions">
        <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
          <span class="icon-star"></span>
        </a>
      </div>
    </div>
  `,
})

/**
- This should be included as part of the storybook documentaiton generation but angular isn't supported yet.
- [Some task specific info]
**/
export class TaskComponent implements OnInit {
    title: string;
    @Input() task: any;
    @Output() onPinTask: EventEmitter<any> = new EventEmitter();
    @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() { }

    onPin(id) {
        this.onPinTask.emit(id);
    }

    onArchive(id) {
        this.onArchiveTask.emit(id);
    }
}