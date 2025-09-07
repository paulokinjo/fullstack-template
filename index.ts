import concurrently from 'concurrently';

concurrently([
   {
      name: 'server',
      command: 'bun dev',
      cwd: 'packages/server',
      prefixColor: 'blue',
   },
   {
      name: 'client',
      command: 'bun dev --host 0.0.0.0 --port 5173',
      cwd: 'packages/client',
      prefixColor: 'green',
   },
]);
