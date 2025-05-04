from sklearn.linear_model import LogisticRegression
import pandas as pd

# Example: Load a dataset (replace with your dataset)
# The dataset should have columns: 'current_role', 'years_of_experience', 'skills', 'desired_role'
data = pd.read_csv("career_data.csv")

# Preprocessing
X = data[['current_role', 'years_of_experience', 'skills']]  # Features
y = data['desired_role']  # Target variable

# Train a model
model = LogisticRegression()
model.fit(X, y)

# Save the model for later use (Pickle or Joblib)
import joblib
joblib.dump(model, 'career_pathway_model.pkl')

# Function to predict career path
def predict_career_path(current_role, years_of_experience, skills):
    input_data = pd.DataFrame([[current_role, years_of_experience, skills]], columns=['current_role', 'years_of_experience', 'skills'])
    return model.predict(input_data)[0]
