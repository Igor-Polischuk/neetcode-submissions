class Solution {
    findAllRecipes(recipes, ingredients, supplies) {
        const graph = {};
        const indegree = {}

        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            indegree[recipe] = ingredients[i].length;
            for (const ingredient of ingredients[i]) {
                if (ingredient in graph) {
                    graph[ingredient].push(recipe);
                } else {
                    graph[ingredient] = [recipe];
                }
            }
        }

        const queue = [...supplies]
        let head = 0
        const result = []

        while (head < queue.length) {
            const ingredient = queue[head++]

            for (const recipe of (graph[ingredient] || [])) {
                indegree[recipe]--
                if (indegree[recipe] === 0) {
                    queue.push(recipe)
                    result.push(recipe)
                }
            }
        }

        return result
    }
}

// yeast -> bread
// flour -> bread
// bread -> sandwich, burger
// meat -> sandwich, burger
// sanwich -> burger

// bread -> 2
// sanwich -> 2
// burger -> 3

