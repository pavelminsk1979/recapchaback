import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postTrain(@Body() body: { value: string; title: string }) {
    const { value, title } = body;
    console.log('body', value);
    console.log('body', title);

    return '11111';
  }
}
