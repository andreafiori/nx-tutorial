import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('add and get Todos', () => {
    let appController: AppController;
    beforeEach(() => {
      appController = app.get<AppController>(AppController);
    });

    it('should return a Todo list', () => {
      expect(appController.getData()).toEqual([{ title: 'Todo 1' }, { title: 'Todo 2' }]);
    });

    it('should add a Todo', () => {
      appController.addTodo();
      expect(appController.getData().length).toEqual(3);
    });

    it('should delete a Todo', () => {
      appController.deleteTodo(1);
      expect(appController.getData().length).toEqual(2);
    });
  });
});
