export class TaskCreatedEvent {
  constructor(
    public readonly title: string,
    public readonly description: string,
  ) {}
}
