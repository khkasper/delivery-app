const port = process.env.PORT || 3001;
import { use, listen } from './app';

use('/login', loginRouter);
use('/register', registerRouter);
use('/customer', customerRouter)
use('/seller', sellerRouter);
use('/admin', adminRouter)
use(errorHandler);

listen(port);
console.log(`Api rodando na porta ${port}`);
