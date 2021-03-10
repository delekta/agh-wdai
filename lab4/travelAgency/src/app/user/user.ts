export class WebsiteUser{
    constructor(
        public name: string,
        public email: string,
        public role: number = 1,
        public uid?,
        ) {}
}

// 4 Roles
// - 1 Reader
// - 2 VIP
// - 3 Employee
// - 4 Admin