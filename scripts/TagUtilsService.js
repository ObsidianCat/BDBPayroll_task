/**
 * Created by Lula on 5/24/2016.
 */
angular.module('payrollApp').factory('TagUtils', [
    function(){
        function addNewTags(allTags, currentTags, newTags) {
            var tags = newTags.split(",");

            for (let i = 0; i < tags.length; i++) {
                var tag = tags[i].trim();
                if (tag) {
                    // Global list of tags
                    if ( allTags.indexOf(tag) == -1) {
                        allTags.push(tag);
                    }

                    // List of tags for this comment
                    if (currentTags.indexOf(tag) == -1) {
                        currentTags.push(tag);
                    }
                }
            }
        }

        function updateTags(tag, tags) {
            var tagIndex = tags.indexOf(tag);
            if (tagIndex > -1) {
                tags.splice(tagIndex, 1);
            }
            else {
                tags.push(tag);
            }
        }

        return {
            addNewTags : addNewTags,
            updateTags: updateTags
        };
}]);