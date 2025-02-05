import { Upload, X } from "lucide-react";

interface UploadImg {
	imagePreview: string | null;
	removeImage: () => void;
	handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadImg({
	imagePreview,
	handleImageUpload,
	removeImage,
}: UploadImg) {
	return (
		<div className="space-y-4">
			{imagePreview ? (
				<div className="relative">
					<img
						src={imagePreview}
						alt="Preview"
						className="object-cover w-full h-64 rounded-lg"
					/>
					<button
						type="button"
						onClick={removeImage}
						className="absolute p-2 rounded-full top-2 right-2 bg-zinc-900/80 hover:bg-zinc-900"
					>
						<X className="w-4 h-4 text-white" />
					</button>
				</div>
			) : (
				<label className="flex flex-col items-center justify-center w-full h-64 transition-colors border-2 border-dashed rounded-lg cursor-pointer border-zinc-600 hover:border-emerald-500/50">
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<Upload className="w-12 h-12 mb-4 text-zinc-400" />
						<p className="mb-2 text-sm text-zinc-400">
							<span className="font-semibold">Clique para fazer upload</span> ou
							arraste e solte
						</p>
						<p className="text-xs text-zinc-500">PNG, JPG (máx. 5MB)</p>
					</div>
					<input
						type="file"
						className="hidden"
						accept="image/*"
						onChange={handleImageUpload}
					/>
				</label>
			)}
		</div>
	);
}
