import type {NextApiRequest, NextApiResponse} from 'next'
import {sql} from "@vercel/postgres";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'GET') {
            // Get data from your database
            const users = await getAllUsers();
            res.status(200).json(users)
        } else if (req.method === 'POST') {
            // Save data to your database
            console.log(req.body)
            res.status(200).json({responde: 'ok'})
        } else if (req.method === 'PUT') {
            // Update data in your database
            console.log(req.body)
            res.status(200).json({responde: 'ok'})
        } else if (req.method === 'DELETE') {
            // Delete data from your database
            console.log(req.body)
            res.status(200).json({responde: 'ok'})
        } else {
            res.status(405).json({error: 'method not allowed'})
        }
        res.status(200).json({responde: 'ok'})
    } catch (err) {
        res.status(500).json({error: 'failed to load data'})
    }
}

const getAllUsers = async () => {
    const {rows} = await sql`SELECT *
                             FROM USERS`;
    return rows;
}
