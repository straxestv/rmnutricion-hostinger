import { Router } from 'express';

const methods = ['Get', 'Post', 'Put', 'Delete', 'Patch', 'All'];

export class Controller {
  constructor(path) {
    this.path = path;
  }

  _start(keys) {
    this.routes = keys.map(key => {
      key = key.length > 0 ? key : "/";

      const handlers = methods.map(method => {
        const handler = this[`${method}:${key}`];
        return handler ? { method, handler } : null;
      }).filter(handler => handler);

      if (handlers.length <= 0) {
        return null;
      }

      return {
        path: key,
        handlers
      }
    }).filter(route => route);
  }

  _use(router) {
    const { path } = this;
    const myRouter = Router();
    this._applyRouter(myRouter);
    router.use(path, myRouter);
    return myRouter;
  }

  _applyRouter(router) {
    this.routes.forEach(route => {
      const { path, handlers } = route;
      handlers.forEach(handler => {
        const { method, handler: fn } = handler;
        router[method.toLowerCase()](path, fn.bind(this));
      });
    });
  }
}