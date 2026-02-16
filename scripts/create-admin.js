/* eslint-disable @typescript-eslint/no-require-imports */
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
} else {
    dotenv.config(); // Fallback to .env
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
    console.log('Please ensure you have a .env.local file with these values.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createAdminUser(email, password) {
    console.log(`Creating admin user: ${email}...`);

    const { data, error } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true, // Auto-confirm email
        user_metadata: {
            full_name: 'Master Admin',
            role: 'admin'
        }
    });

    if (error) {
        console.error('Error creating user:', error.message);
        return;
    }

    console.log('Success! Admin user created.');
    console.log(`Email: ${data.user.email}`);
    console.log(`Role: ${data.user.user_metadata.role}`);
    console.log(`ID: ${data.user.id}`);
}

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
    console.log('\nUsage: node scripts/create-admin.js <email> <password>');
    console.log('Example: node scripts/create-admin.js admin@icar2026.org AdminPass123!\n');
} else {
    createAdminUser(email, password);
}
