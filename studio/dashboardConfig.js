export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62dd147101230240a3afd7c2',
                  title: 'Sanity Studio',
                  name: 'bognamk-sanity-studio',
                  apiId: '70a9c9d9-e9ae-4c66-b94a-bd4d631e22a0'
                },
                {
                  buildHookId: '62dd14714c2bea3e5baabad4',
                  title: 'Portfolio Website',
                  name: 'bognamk-sanity',
                  apiId: '1336de29-a7d0-4f13-b21b-a40fbb50fe64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krawc/bognamk-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://bognamk-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
