import { Todo } from '../shared/models/todo/todo';

export class TodoViewModel {
  constructor(private item: Todo) {}

  get id(): number {
    return this.item.id;
  }

  get idStr(): string {
    return this.id.toString();
  }

  get title(): string {
    return this.item.title;
  }

  get created(): string {
    return new Date(this.item.created).toISOString();
  }

  get modified(): string {
    return new Date(this.item.modified).toISOString();
  }
}
