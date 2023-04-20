import { Controller, Get, Post, Body } from '@nestjs/common';
import axios from 'axios';

@Controller('auth')
export class AuthController {
  @Get('42')
  async fortyTwoLogin() {
    const url = 'https://api.intra.42.fr/oauth/authorize' +
      '?client_id=' + process.env.FORTYTWO_CLIENT_ID +
      '&redirect_uri=' + encodeURIComponent('http://localhost:3000/auth/42/callback') +
      '&response_type=code';
    return { url };
  }

  @Post('42/callback')
  async fortyTwoCallback(@Body() body) {
    const url = 'https://api.intra.42.fr/oauth/token';
    const data = {
      grant_type: 'authorization_code',
      client_id: process.env.FORTYTWO_CLIENT_ID,
      client_secret: process.env.FORTYTWO_CLIENT_SECRET,
      code: body.code,
      redirect_uri: 'http://localhost:3000/auth/42/callback',
    };
    const response = await axios.post(url, data);
    const accessToken = response.data.access_token;
    return { accessToken };
  }
}
