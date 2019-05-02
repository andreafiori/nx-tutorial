import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('test app service', () => {
    it('should return a Todo list', () => {
      expect(service.getTodos()).toEqual([{ title: 'Todo 1' }, { title: 'Todo 2' }]);
    });

    it('should add a task', () => {
      service.addTodo();
      expect(service.getTodos().length).toBe(3);
    });

    it('should delete a task', () => {
      console.log(service.getTodos());
      service.deleteTodo(1);
      expect(service.getTodos().length).toBe(2);
    });
  });
});
