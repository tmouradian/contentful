const Contentful = require('spike-contentful')
const cssStandards = require('spike-css-standards')
const htmlStandards = require('reshape-standard')
const reshape = require('reshape')

const md = require('markdown-it')({
  html: true,
  linkify: false,
  typographer: false,
  xhtmlOut: false,
  breaks: false
})

// this will be replaced by environment passed as an argument to compile
// for example spike compile --env zh-CN

const locals = {environment: '${env}', slug: '${slug}'}

module.exports = {

  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'build.sh', 'app.js.template'],

  postcss: cssStandards({parser: false}),

  plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: '67d34b373050294590e30d72080883293386cf3d44092877193fb72964e482b0',
      spaceId: 'lwa2j0fs0k5l',
      contentTypes: [
        {
          name: 'Product',
          id: '2PqfXUJwE8qSYKuM0U6w8M',
          transform: (product) => {

            console.log('>> Compiling for Environment: ' + locals.environment + ' Slug: ' + locals.slug)
            // console.log('1: ---' + product.fields.sku)
            console.log('2: ---' + product.fields.slug)
            // console.log(product)

            let _product = null

            // if (product.fields.sku === locals.environment && product.fields.slug === locals.slug) {
            if (product.fields.slug === locals.slug) {

              console.log('3: --- found match ')
              _product = product
              _product.fields.productDescription = md.render(_product.fields.productDescription)

              // console.log(_product);
              return _product
            }

            return _product
          },
          filters: {
            'locale': locals.environment
          }
        }
      ]
    })
  ],

  // Giving parser=false switches from sugar to regular html
  //
  reshape: htmlStandards({
    parser: false,
    locals
  })
}

