import AWS from "aws-sdk";

// Configure AWS SDK for S3
AWS.config.update({
	accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
	region: process.env.REACT_APP_AWS_REGION, // Use your region
});

const s3 = new AWS.S3();

export const uploadImageToS3 = async (imageData) => {
	try {
		console.log("Converting base64 to Blob...");
		const blobData = await fetch(imageData).then((res) => res.blob());

		console.log("Blob data ready:", blobData);

		const fileName = `images/${Date.now()}.png`;

		const params = {
			Bucket: process.env.REACT_APP_BUCKET_NAME, // Ensure this is correctly set
			Key: fileName,
			Body: blobData,
			ContentType: "image/png", // Adjust for your image type if necessary
		};

		console.log("Uploading to S3 with params:", params);

		const data = await s3.upload(params).promise();

		console.log("Image uploaded successfully:", data.Location);
		return data.Location; // Return the S3 URL of the uploaded image
	} catch (error) {
		console.error("Error uploading image to S3:", error);
		throw new Error("Image upload failed");
	}
};
