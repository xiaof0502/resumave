'use client';

import { useDispatch } from 'react-redux';
import Input from '../UI/Input';
import { useSelector } from 'react-redux';
import { updateResumeValue } from '@/store/slices/resumeSlice';
import ResumeFields from '@/config/ResumeFields';

const SingleEditor = ({ tab }) => {
    const { fields } = ResumeFields[tab];

    const dispatch = useDispatch();
    const resumeData = useSelector(state => state.resume[tab]);

    const handleChange = e => {
        const { name, value } = e.target;

        dispatch(
            updateResumeValue({
                tab,
                name,
                value,
            }),
        );
    };

    return (
        <div className="grid grid-cols-2 gap-6">
            {fields.map(field => (
                <Input key={field.name} {...field} onChange={handleChange} value={resumeData?.[field?.name]} />
            ))}
        </div>
    );
};

export default SingleEditor;