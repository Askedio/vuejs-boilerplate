module.exports = {
    template: '<nav>' +
        '<ul class="pagination">' +
            '<li class="page-item" v-if="pagination.current_page > 1">' +
                '<a class="page-link"  aria-label="Previous" v-link="{ path:  (parseInt(pagination.current_page) - 1) }">' +
                    '<span aria-hidden="true">&laquo;</span>' +
                '</a>' +
            '</li>' +
            '<li v-for="num in array" class="page-item" :class="{\'active\': num == pagination.current_page}">' +
                '<a class="page-link"  href="#" v-link="{ path: num }">{{ num }}</a>' +
            '</li>' +
            '<li class="page-item" v-if="pagination.current_page < pagination.total_pages">' +
                '<a class="page-link"  aria-label="Next" v-link="{ path: (parseInt(pagination.current_page) + 1) }">' +
                    '<span aria-hidden="true">&raquo;</span>' +
                '</a>' +
            '</li>' +
        '</ul>' +
    '</nav>',
    props: {
        pagination: {
            type: Object,
            required: true
        },
        callback: {
            type: Function,
            required: true
        },
    },
    watch: {
        'pagination.order': function () {
            this.callback();
        },
        'pagination.current_page': function () {
            this.callback();
        }
    },
    computed: {
        array: function () {
            if(!this.pagination.count) {
                return [];
            }

            var from = this.pagination.current_page - this.pagination.per_page;
            if(from < 1) {
                from = 1;
            }

            to = this.pagination.total_pages;


            var arr = [];
            while (from <=to) {
                arr.push(from);
                from++;
            }

            return arr;
        }
    }
};
