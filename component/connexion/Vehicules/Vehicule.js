import { createDrawerNavigator } from '@react-navigation/drawer';

import AddVehicule from './AddVehicule';
import MesVehicules from './MesVehicules';

const Drawer = createDrawerNavigator();

const Vehicule = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={AddVehicule} />
      <Drawer.Screen name="Article" component={MesVehicules} />
    </Drawer.Navigator>
  );
}

export default Vehicule;