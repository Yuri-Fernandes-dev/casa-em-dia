# Casa em Dia

Uma aplicação web simples e responsiva para gerenciar itens domésticos compartilhados entre um casal. Controle facilmente o que ainda tem em casa, o que está acabando e o que já acabou.

## Funcionalidades

- Lista completa de itens da casa
- Status para cada item: OK, Acabando ou Acabou
- Mudança rápida de status com um clique
- Lista de compras automática (itens Acabando ou Acabou)
- Interface responsiva (funciona bem em desktop e celular)
- Adição e remoção de itens
- Indicadores visuais por cores para cada status

## Como Usar

1. Abra o arquivo `index.html` em seu navegador
2. Para adicionar um item:
   - Digite o nome do item no campo de texto
   - Selecione o status inicial
   - Clique em "Adicionar"
3. Para mudar o status de um item:
   - Clique no botão "Mudar Status"
   - O status mudará na sequência: OK → Acabando → Acabou → OK
4. Para ver a lista de compras:
   - Clique no botão "Lista de Compras"
   - Serão mostrados apenas os itens marcados como "Acabando" ou "Acabou"

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Grid Layout)
- JavaScript puro
- Design responsivo
- Sem dependências externas

## Estrutura do Projeto

```
casa-em-dia/
├── index.html      # Estrutura da página
├── styles.css      # Estilos e layout
├── script.js       # Lógica da aplicação
└── README.md       # Esta documentação
```

## Próximos Passos

- [ ] Persistência de dados (localStorage ou backend)
- [ ] Sincronização entre dispositivos
- [ ] Categorias para os itens
- [ ] Histórico de alterações
- [ ] Notificações quando itens estiverem acabando