


interface Category {
    category_name: string;
    id: number;
    children?: Category[];
}

interface TransformedCategory {
    label: string;
    value: number;
    children: TransformedCategory[];
}

export function transformCategories(categories: Category[]): TransformedCategory[] {
    return categories.map(category => {
        const transformedCategory: TransformedCategory = {
            label: category.category_name,
            value: category.id,
            children: category.children ? transformCategories(category.children) : [] // Recursively transform children
        };
        return transformedCategory;
    });
}