# language: pt

Funcionalidade: Preenchimento de formulário

    Contexto:
        Dado que o usuário acessa a página de login
        Quando ele preenche o usuario "admin" e a senha "admin123"
        Então ele deve ver o dashboard com título "Time at Work"

    Cenário: Usuário acessa o menu "My Info" e atualiza alguns detalhes pessoais
        Dado que o usuário acessa o menu "My Info"
        Quando ele atualiza o formulário com os seguintes dados:
            | Name   | MiddleName | LastName | EmployeeID | LicenseExpiryDate | Nationality | Gender |
            | Dienes | Nogueira   | Stein    | 1990       | 2030-12-31        | Belarusian  | Female | 
        E clica no botão "Save"
        Então ele deve ver a mensagem "Successfully Updated"