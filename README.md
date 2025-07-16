# Testes Automatizados – Projeto Interno

Este repositório contém scripts de automação de testes desenvolvidos com Playwright, utilizando a linguagem Javascript, e também Python para algumas funções auxiliares.  
Os testes são específicos para o projeto interno da empresa e utilizam locators e fluxos que funcionam exclusivamente nesse ambiente.

## 📁 Estrutura do Projeto

- `actions/`: componentes e ações reutilizáveis para facilitar a manutenção dos testes.
- `e2e/`: testes ponta a ponta que validam fluxos completos do sistema.
- `support/`: scripts auxiliares como conexão com banco de dados, execução de queries SQL e utilitários.

## 📄 Descrição dos Arquivos

### `actions/`
| Arquivo           | Descrição                                                  |
|-------------------|------------------------------------------------------------|
| `Login.js`        | Realiza login no sistema com credenciais válidas.          |
| `GoTo.js`         | Navega entre páginas do sistema.                           |
| `Shortcuts.js`    | Executa atalhos de navegação e ações rápidas.              |
| `DocUpload.js`    | Automatiza o upload de documentos.                         |
| `CreateFolder.js` | Cria novos dossiês ou pastas no sistema.                   |
| `Permission.js`   | Gerencia permissões de usuários.                           |
| `Search.js`       | Realiza buscas por documentos ou dossiês.                  |
| `Share.js`        | Compartilha documentos e dossiês com outros usuários.                |
| `Edit.js`         | Edita informações de dossiês e documentos.              |

### `e2e/`
| Arquivo                        | Descrição                                                  |
|--------------------------------|------------------------------------------------------------|
| `ged-criar_dossie.spec.js`     | Testa o fluxo de criação de dossiês.                       |
| `ged-editar.spec.js`           | Testa a edição de documentos ou dossiês.                   |
| `ged-importar_documento.spec.js` | Testa a importação de documentos.                        |
| `ged-share.spec.js`            | Testa o compartilhamento de documentos e dossiês.                    |
| `ged-pesquisa.spec.js`         | Testa a funcionalidade de pesquisa.                        |
| `ged-ice.spec.js`              | Testa funcionalidades relacionadas a instrumentos de crédito. |

### `support/`
| Arquivo             | Descrição                                                  |
|---------------------|------------------------------------------------------------|
| `db2_query.py`      | Executa queries SQL no banco DB2.                          |
| `db2Connector.py`   | Gerencia a conexão com o banco de dados.                   |
| `sqlUtils.js`       | Contém queries SQL reutilizáveis para os testes.           |
| `index.js`          | Arquivo de entrada para utilitários ou configurações.      |

