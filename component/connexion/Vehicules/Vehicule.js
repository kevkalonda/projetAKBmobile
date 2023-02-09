import { createDrawerNavigator } from '@react-navigation/drawer';

import AddVehicule from './AddVehicule';
import MesVehicules from './MesVehicules';

const Drawer = createDrawerNavigator();

const Vehicule = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Mes Vehicule" component={MesVehicules} />
      <Drawer.Screen name="Ajouter un Vehicule" component={AddVehicule} />
    </Drawer.Navigator>
  );
}
export default Vehicule;