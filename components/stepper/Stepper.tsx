import React, { useCallback, useState, createContext } from 'react';
import { produce } from 'immer';

function Stepper() {
    const FORM_STEPS = [
        {
            label: `Details`,
        },
        {
            label: `Preferences`,
        },
        {
            label: `Complete`,
        },
    ];

    const FORM_STATE = {
        selectedIndex: 0,
        steps: {
            details: {
                valid: false,
                dirty: false,
                value: {
                    name: '',
                    dueDate: '',
                },
            },
            preferences: {
                valid: false,
                dirty: false,
                value: {
                    receiveEmails: false,
                    receiveNotifications: false,
                },
            },
        },
    };

    const FormStateContext = createContext({
        form: FORM_STATE,
        setForm: (
            form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
        ) => { },
    });

    const [form, setForm] = useState(FORM_STATE);

    const onComplete = useCallback((state) => {
        // do something with "state"
    }, []);

    const { form, setForm } = useContext(FormStateContext);

    const next = useCallback(() => {
        setForm(
            produce((form) => {
                form.selectedIndex += 1;
            })
        );
    }, [setForm]);

    const prev = useCallback(() => {
        setForm(
            produce((form) => {
                form.selectedIndex -= 1;
            })
        );
    }, [setForm]);

    const setSelectedIndex = useCallback(
        (index: number) => {
            setForm(
                produce((form) => {
                    form.selectedIndex = index;
                })
            );
        },
        [setForm]
    );

    return (
        <FormStateContext.Provider
            value={{
                form,
                setForm,
            }}
        >
            <Stepper />
        </FormStateContext.Provider>
    );
}

export default Stepper;