import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async postTrain(
    @Body() body: { value: string; title: string; token: string },
  ) {
    const { value, title, token } = body;
    console.log('body', value);
    console.log('body', title);
    console.log('token', token);

    const resultFromGoogle = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      `secret=6LcIaUMrAAAAAGQeSe5nD4bOBayg188byNV-NGoe&response=${token}`,
    );
    console.log('resultFromGoogle', resultFromGoogle.data);

    return '11111';
  }
}
