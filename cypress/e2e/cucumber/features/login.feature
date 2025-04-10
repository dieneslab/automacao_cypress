# language: pt

Funcionalidade: Login no sistema

    Cenário: Usuário faz login com credenciais válidas
        Dado que o usuário acessa a página de login
        Quando ele preenche o usuario "admin" e a senha "admin123"
        Então ele deve ver o dashboard com título "Time at Work"

    Cenário: Usuário tenta login com senha inválida
        Dado que o usuário acessa a página de login
        Quando ele preenche o usuario "admin" e a senha "senhaErrada"
        Então ele deve ver a mensagem de erro "Invalid credentials"        