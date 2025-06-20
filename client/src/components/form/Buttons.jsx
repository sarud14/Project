import { Loader } from "lucide-react";

export default function Buttons({ isSubmitting, label }) {
  return (
    
      <button disabled={isSubmitting} className="btn btn-neutral mt-4">
        {isSubmitting ? (
          <>
            <Loader className="animate-spin" />
            <p>Loading..</p>
          </>
        ) : (
          label
        )}
      </button>
    
  );
}
