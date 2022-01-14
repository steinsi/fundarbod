/* ----------------------------------------------------------------------------
 * Easy!Appointments - Open Source Web Scheduler
 *
 * @package     EasyAppointments
 * @author      A.Tselegidis <alextselegidis@gmail.com>
 * @copyright   Copyright (c) Alex Tselegidis
 * @license     https://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        https://easyappointments.org
 * @since       v1.5.0
 * ---------------------------------------------------------------------------- */

/**
 * Unavailabilities HTTP client.
 *
 * This module implements the unavailabilities related HTTP requests.
 */
App.Http.Unavailabilities = (function () {
    /**
     * Save (create or update) an unavailability.
     *
     * @param {Object} unavailability
     *
     * @return {Object}
     */
    function save(unavailability) {
        return unavailability.id ? update(unavailability) : create(unavailability);
    }

    /**
     * Create an unavailability.
     *
     * @param {Object} unavailability
     *
     * @return {Object}
     */
    function create(unavailability) {
        const url = App.Utils.Url.siteUrl('unavailabilities/create');

        const data = {
            csrf_token: App.Vars.csrf_token,
            unavailability: unavailability
        };

        return $.post(url, data);
    }

    /**
     * Update an unavailability.
     *
     * @param {Object} unavailability
     *
     * @return {Object}
     */
    function update(unavailability) {
        const url = App.Utils.Url.siteUrl('unavailabilities/update');

        const data = {
            csrf_token: App.Vars.csrf_token,
            unavailability: unavailability
        };

        return $.post(url, data);
    }

    /**
     * Delete an unavailability.
     *
     * @param {Number} unavailabilityId
     *
     * @return {Object}
     */
    function destroy(unavailabilityId) {
        const url = App.Utils.Url.siteUrl('unavailabilities/destroy');

        const data = {
            csrf_token: App.Vars.csrf_token,
            unavailability_id: unavailabilityId
        };

        return $.post(url, data);
    }

    /**
     * Search unavailabilities by keyword.
     *
     * @param {String} keyword
     * @param {Number} limit
     * @param {Number} offset
     * @param {String} orderBy
     *
     * @return {Object}
     */
    function search(keyword, limit, offset, orderBy) {
        const url = App.Utils.Url.siteUrl('unavailabilities/search');

        const data = {
            csrf_token: App.Vars.csrf_token,
            keyword,
            limit,
            offset,
            order_by: orderBy
        };

        return $.post(url, data);
    }

    /**
     * Find an unavailability.
     *
     * @param {Number} unavailabilityId
     *
     * @return {Object}
     */
    function find(unavailabilityId) {
        const url = App.Utils.Url.siteUrl('unavailabilities/find');

        const data = {
            csrf_token: App.Vars.csrf_token,
            unavailability_id: unavailabilityId
        };

        return $.post(url, data);
    }

    return {
        save,
        create,
        update,
        destroy,
        search,
        find
    };
})();
