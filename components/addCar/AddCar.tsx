import React, { MouseEventHandler } from 'react';
import Button from '../buttons/Button';
import Input from '../inputs/Input';

interface props{
    setShowAddCar: (value: React.SetStateAction<boolean>) => void;
}

const AddCar : React.FC<props> = ({  setShowAddCar }: props) => {
    return (
        <div className='flex justify-center'>
            <form>
                <Input label="Model" type="Model" />
                <Input label="Plaque d'immatriculation" type="Immatriculation" />
                <Input label="Couleur" type="Couleur" />
                <Input label="Nombre de place" type="Nombre" />
                <div className="flex flex-wrap justify-center gap-x-6">
                    <Button style="classic" onClick={() =>  setShowAddCar(false)} type="button" label="Annuler"/>
                    <Button style="classic" onClick={() =>  setShowAddCar(false)} type="button" label="Enregistrer" />
                </div>
            </form>
        </div>
    );
};

export default AddCar;