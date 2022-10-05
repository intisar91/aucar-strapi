'use strict';

/**
 * auction-sale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auction-sale.auction-sale');
