import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TaskDocument {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TaskSchema = SchemaFactory.createForClass(TaskDocument);
