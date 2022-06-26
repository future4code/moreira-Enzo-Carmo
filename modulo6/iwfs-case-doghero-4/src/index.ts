import DogheroBusiness from "./Business/DogHeroBusiness";
import app from "./Controller/App";
import DogheroController from "./Controller/DogHeroController";
import { DogheroData } from "./data/DogHeroData";
import { PetsData } from "./data/PetsData";

const dogheroBusiness = new DogheroBusiness(new DogheroData(), new PetsData());
const dogheroController = new DogheroController(dogheroBusiness);

app.post("/dogwalk/create", dogheroController.create);
app.get("/dogwalk/index", dogheroController.index);
app.put("/dogwalk/start", dogheroController.start);
