import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export class Utils {
    static preventDefault(event) {
        event.preventDefault();
    }

    static getViewsDirectory() {
        const __filename = fileURLToPath(import.meta.url);
        const currentDirectory = dirname(__filename);
        return `${currentDirectory}/../views`;
    }
}