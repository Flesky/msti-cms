import {factories} from "@strapi/strapi";

export default factories.createCoreController('api::product.product', ({ strapi }) =>  ({
  async find(ctx) {
    const {region} = ctx.query

    const knex = strapi.db.connection

    const hiddenProductIds = await knex('product_availability')
      .where({id: region, hidden: true})
      .pluck('product.id')

    const entities = await strapi.service('api::product.product').findMany({
      filters: {
        id: { $notIn: hiddenProductIds.length ? hiddenProductIds : [-1] }
      },
      populate: '*',
    })

    return this.transformResponse(entities);
  }
}))