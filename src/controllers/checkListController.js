import checklistRules from '../config/checkListRules.js';
import axios from 'axios';

export const evaluateChecklist = async (req, res) => {
    try {
        const response = await axios.get('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639');
        const data = response.data;

        const results = checklistRules.map((rule) => {
            if (rule.custom) {
                return { name: rule.name, passed: rule.condition(data) };
            } else {
                return { name: rule.name, passed: rule.condition(data[rule.field]) };
            }
        });

        res.json({ results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch and evaluate checklist.' });
    }
};