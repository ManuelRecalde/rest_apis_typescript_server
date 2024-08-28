import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags:[
            {
                name: 'Products',
                description: 'API operation related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis: ['./src/router.ts']
}
const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss : `
        .topbar-wrapper .link{
            content: url('https://manuelrecalde.com/wp-content/uploads/elementor/thumbs/Manu-logo_Mesa-de-trabajo-1-copia-p3ncjfggtikcyf053zjkpwi36ihqsw5msi3kx40hds.png');
            height: 60px;
            width: auto;
            object-fit: contain;
        }
        .swagger-ui .topbar{
            background-color: #2b3b45;
        }    
    `,
    customSiteTitle: 'Documentacion REST API Express / Express / TypeScript'
}

export default swaggerSpec
export {
    swaggerUiOptions
}