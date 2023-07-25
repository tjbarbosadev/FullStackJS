import BoardController from './infra/controller/BoardController';
import PgPromisseConnection from './infra/database/PgPromiseConnection';
import ExpressAdapter from './infra/http/ExpressAdapter';
const connection = new PgPromisseConnection();

const http = new ExpressAdapter();
new BoardController(http, connection);
http.listen(3000);