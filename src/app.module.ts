import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configurations/configuration.module';
import { DatabaseModule } from './database/database.module';
import { CoffeeModule } from './modules/coffee/coffee.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, CoffeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
