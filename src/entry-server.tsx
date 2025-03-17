// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <title>Luana Cassimiro</title>
          <meta name="title" content="Luana Cassimiro" />
          <meta
            name="description"
            content="Olá, me chamo Luana e este é o meu curriculo."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://luana.lzart.com.br/" />
          <meta property="og:title" content="Luana Cassimiro" />
          <meta
            property="og:description"
            content="Olá, me chamo Luana e este é o meu curriculo."
          />
          <meta property="og:image" content="https://github.com/n0tlun4.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://luana.lzart.com.br/" />
          <meta property="twitter:title" content="Luana Cassimiro" />
          <meta
            property="twitter:description"
            content="Olá, me chamo Luana e este é o meu curriculo."
          />
          <meta
            property="twitter:image"
            content="https://github.com/n0tlun4.png"
          />

          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
