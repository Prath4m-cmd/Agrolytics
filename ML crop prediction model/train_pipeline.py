from src.components.data_ingestion import DataIngestion
from src.components.data_transformation import DataTransformation
from src.components.model_trainer import ModelTrainer

if __name__ == "__main__":

    print("Starting Data Ingestion...")
    ingestion = DataIngestion()

    train_path, test_path = ingestion.initiate_data_ingestion()

    print("Starting Data Transformation...")
    transformation = DataTransformation()

    train_arr, test_arr, _ = transformation.initiate_data_transformation(
        train_path,
        test_path
    )

    print("Starting Model Training...")
    trainer = ModelTrainer()

    accuracy = trainer.initiate_model_trainer(
        train_arr,
        test_arr
    )

    print("Accuracy:", accuracy)